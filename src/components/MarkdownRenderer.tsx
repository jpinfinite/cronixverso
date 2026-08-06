import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  if (!content) return null;

  const renderFormattedText = (text: string) => {
    // Helper to format bold **text** and italic *text*
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);

    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-bold text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em key={index} className="italic text-cyan-200">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  // Pre-process: split lines and group into logical elements
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];

  let currentList: string[] = [];
  let currentListType: 'ul' | 'ol' = 'ul';
  let currentParagraphLines: string[] = [];

  const flushParagraph = () => {
    if (currentParagraphLines.length > 0) {
      const text = currentParagraphLines.join(' ').trim();
      if (text) {
        if (text.startsWith('**Pergunta')) {
          elements.push(
            <div 
              key={`faq-q-${elements.length}`} 
              className="p-4 sm:p-5 rounded-2xl bg-[#0f1420] border border-cyan-500/30 text-white font-semibold text-base sm:text-lg my-4 shadow-md"
            >
              {renderFormattedText(text)}
            </div>
          );
        } else if (text.startsWith('*Resposta:*')) {
          elements.push(
            <div 
              key={`faq-a-${elements.length}`} 
              className="p-4 sm:p-5 rounded-2xl bg-[#07090e] border border-white/10 text-slate-300 text-sm sm:text-base leading-relaxed pl-6 border-l-4 border-l-cyan-400 my-4"
            >
              {renderFormattedText(text)}
            </div>
          );
        } else {
          elements.push(
            <p key={`p-${elements.length}`} className="text-slate-300 text-base sm:text-lg leading-relaxed my-4">
              {renderFormattedText(text)}
            </p>
          );
        }
      }
      currentParagraphLines = [];
    }
  };

  const flushList = () => {
    if (currentList.length > 0) {
      const items = [...currentList];
      const isOl = currentListType === 'ol';
      elements.push(
        <ul key={`list-${elements.length}`} className="space-y-3 my-5 pl-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-3 text-slate-300 text-base sm:text-lg bg-[#0f1420]/40 p-3 rounded-xl border border-white/5">
              <span className="text-cyan-400 font-bold text-base mt-0.5">
                {isOl ? `${idx + 1}.` : '•'}
              </span>
              <span className="flex-1 leading-relaxed">{renderFormattedText(item)}</span>
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      return;
    }

    // Heading 3
    if (line.startsWith('### ')) {
      flushParagraph();
      flushList();
      const text = line.replace(/^###\s+/, '');
      elements.push(
        <h3 
          key={`h3-${elements.length}`} 
          className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-10 mb-4 border-l-4 border-cyan-500 pl-4 py-2 bg-gradient-to-r from-cyan-500/15 via-cyan-500/5 to-transparent rounded-r-xl shadow-md"
        >
          {renderFormattedText(text)}
        </h3>
      );
      return;
    }

    // Heading 4
    if (line.startsWith('#### ')) {
      flushParagraph();
      flushList();
      const text = line.replace(/^####\s+/, '');
      elements.push(
        <h4 
          key={`h4-${elements.length}`} 
          className="font-display font-bold text-xl text-cyan-300 mt-8 mb-3 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block shadow-sm shadow-cyan-400/50" />
          {renderFormattedText(text)}
        </h4>
      );
      return;
    }

    // Bullet List Item
    if (line.startsWith('- ') || line.startsWith('* ')) {
      flushParagraph();
      const itemText = line.replace(/^[-*]\s+/, '');
      currentListType = 'ul';
      currentList.push(itemText);
      return;
    }

    // Numbered List Item
    if (/^\d+\.\s/.test(line)) {
      flushParagraph();
      const itemText = line.replace(/^\d+\.\s+/, '');
      currentListType = 'ol';
      currentList.push(itemText);
      return;
    }

    // Otherwise, standard paragraph text line
    flushList();
    currentParagraphLines.push(line);
  });

  flushParagraph();
  flushList();

  return (
    <div className="space-y-4 text-slate-300">
      {elements}
    </div>
  );
};

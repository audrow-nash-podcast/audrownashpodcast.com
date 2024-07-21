import { useState } from "preact/hooks";

type FoldingSectionProps = {
  title: string;
  children: preact.ComponentChildren;
};

export default function FoldingSection(
  { title, children }: FoldingSectionProps,
) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section class="border border-gray-200 rounded-lg mb-4">
      <button
        class="w-full text-left p-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 class="text-2xl font-bold">{title}</h3>
        <span class="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div class="p-4 pt-0 space-y-4">
          {children}
        </div>
      )}
    </section>
  );
}

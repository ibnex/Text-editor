import React, { useState, useEffect } from "react";

function TextEditor() {
  const [TextValue, setTextValue] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);

  const UpperCase = () => setTextValue(TextValue.toUpperCase());
  const Lowercase = () => setTextValue(TextValue.toLowerCase());
  const RemoveSpace = () => setTextValue(TextValue.replaceAll(" ", ""));
  const Delete = () => setTextValue("");
  const Copy = () => {
    navigator.clipboard.writeText(TextValue.trim());
    alert("Copied to clipboard!");
  };
  const Trim = () => setTextValue(TextValue.trim());
  const Titlecase = () =>
    setTextValue(
      TextValue.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
    );
  const SentenceCase = () =>
    setTextValue(
      TextValue.toLowerCase().replace(/(^\w{1}|\.\s*\w{1})/gi, (char) =>
        char.toUpperCase()
      )
    );

  useEffect(() => {
    setWordCount(
      TextValue === ""
        ? 0
        : TextValue.trim()
            .split(/\s+/)
            .filter((word) => word !== "").length
    );
    setCharacterCount(TextValue.replaceAll(" ", "").length);
  }, [TextValue]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-start">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">
      
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={UpperCase}
          >
            Uppercase
          </button>
          <button
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={Lowercase}
          >
            Lowercase
          </button>
          <button
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={Titlecase}
          >
            Title Case
          </button>
          <button
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={SentenceCase}
          >
            Sentence Case
          </button>
          <button
            className="bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-600 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={Trim}
          >
            Trim
          </button>
          <button
            className="bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-600 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={RemoveSpace}
          >
            Remove Spaces
          </button>
          <button
            className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={Copy}
          >
            Copy
          </button>
          <button
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={Delete}
          >
            Clear
          </button>
        </div>

 
        <div className="mb-6 border rounded-lg p-4">
          <textarea
            value={TextValue}
            onChange={(e) => setTextValue(e.target.value)}
            placeholder="Enter text here..."
            className="w-full h-60 resize-none p-3 font-mono text-lg focus:outline-none "
          />
        </div>

   
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <div className="flex items-center">
              <span className="font-semibold text-indigo-600 mr-2">Words:</span>
              <span className="text-xl text-gray-800">{wordCount}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-indigo-600 mr-2">Chars:</span>
              <span className="text-xl text-gray-800">{characterCount}</span>
            </div>
          </div>
   
        </div>

   
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="overflow-y-auto max-h-[30vh] font-mono text-lg text-gray-800 whitespace-pre-wrap">
            <p>{TextValue === "" ? "Enter text here..." : TextValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextEditor;

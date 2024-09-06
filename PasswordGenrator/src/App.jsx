import React, { useCallback, useState, useEffect, useRef } from "react";
import PasswordInput from "./password/PasswordInput";
import PasswordControls from "./password/PasswordControls";
import PasswordHistory from "./password/PasswordHistory";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copiedPassword, setCopiedPassword] = useState([]);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    if (numberAllowed) str += '0123456789';
    if (characterAllowed) str += '!@#$%^&*';
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * str.length);
      pass += str.charAt(random);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    // Generate initial password
    passwordGenerator();
  }, [passwordGenerator]);

  useEffect(() => {
    // Update password when length or settings change
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  const copyPasswordToClipboard = (passwordToCopy) => {
    passwordToCopy == passwordRef.current ? passwordRef.current.select() : null
    if (passwordToCopy) {
      if (passwordRef.current) {
        // Select the text in the input field
        passwordRef.current.select();

        // Copy the selected text to the clipboard
        navigator.clipboard.writeText(passwordToCopy)
          .then(() => {
            setCopiedPassword((prev) => {
              const copied = [passwordToCopy, ...prev];
              const unique = Array.from(new Set(copied));
              return unique.slice(0, 10);
            });
          })
          .catch((error) => {
            console.error('Failed to copy text: ', error);
          });
      }
    } else {
      console.log("No password to copy");
    }
  };

  return (
    <div className="w-full h-screen  flex justify-start flex-col items-center bg-slate-950">
      <div className="max-w-lg shadow-lime-100/ shadow-2xl mt-28 max-h-full border rounded-xl w-full justify-center items-center">
        <h1 className="text-center m-10 text-4xl text-neutral-50">
          Password Generator
        </h1>
        <PasswordInput
          password={password}
          onCopy={copyPasswordToClipboard}
          ref={passwordRef}
        />
        <PasswordControls
          length={length}
          setLength={setLength}
          numberAllowed={numberAllowed}
          setNumberAllowed={setNumberAllowed}
          characterAllowed={characterAllowed}
          setCharacterAllowed={setCharacterAllowed}
          onGenerate={passwordGenerator}
        />

      </div>
      <PasswordHistory
        copiedPassword={copiedPassword}
        onCopy={copyPasswordToClipboard}
      />
    </div>
  );
}

export default App;

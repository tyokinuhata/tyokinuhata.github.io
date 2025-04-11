import { useState, useEffect } from "react";
import "./App.css";
import Top from "./pages/Top";

// コナミコマンドのキーシーケンス
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

function App() {
  const [konamiActivated, setKonamiActivated] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // 現在のキーシーケンスに新しいキーを追加
      const newSequence = [...keySequence, event.key];

      // 最新の10キーだけを保持
      const updatedSequence = newSequence.slice(-konamiCode.length);
      setKeySequence(updatedSequence);

      // コナミコマンドと一致するか確認
      const isKonamiCode =
        updatedSequence.length === konamiCode.length &&
        updatedSequence.every((key, index) => key === konamiCode[index]);

      if (isKonamiCode) {
        setKonamiActivated(true);
        // コンソールにメッセージを表示
        console.log("🎮 コナミコマンド発動！");
      }
    };

    // キーボードイベントリスナーを追加
    window.addEventListener("keydown", handleKeyDown);

    // クリーンアップ関数
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keySequence]);

  return (
    <div className={konamiActivated ? "konami-activated" : ""}>
      <Top />
    </div>
  );
}

export default App;

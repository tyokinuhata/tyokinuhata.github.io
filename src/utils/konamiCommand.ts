import { useState, useEffect, useRef } from "react";

type KeySequence = string[];

export const konamiCommandSequence: KeySequence = [
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

/**
 * 入力されたキーシーケンスがコナミコマンドと一致するか確認する
 * @param keySequence 入力されたキーシーケンス
 * @returns コナミコマンドと一致するかどうか
 */
export const isKonamiCommand = (keySequence: KeySequence): boolean => {
  if (keySequence.length !== konamiCommandSequence.length) {
    return false;
  }

  return keySequence.every((key, index) => key === konamiCommandSequence[index]);
};

/**
 * キーボードイベントからキーシーケンスを更新する
 * @param event キーボードイベント
 * @param currentSequence 現在のキーシーケンス
 * @returns 更新されたキーシーケンス
 */
export const updateKeySequence = (
  event: KeyboardEvent,
  currentSequence: KeySequence,
): KeySequence => {
  const newSequence = [...currentSequence, event.key];
  return newSequence.slice(-konamiCommandSequence.length);
};

/**
 * コナミコマンドを検出するカスタムフック
 * @returns コナミコマンドが有効かどうかを示すboolean値
 */
export const useKonamiCommand = (): boolean => {
  const [activated, setActivated] = useState(false);
  const keySequenceRef = useRef<KeySequence>([]);

  useEffect(() => {
    if (activated) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      keySequenceRef.current = updateKeySequence(event, keySequenceRef.current);

      if (isKonamiCommand(keySequenceRef.current)) {
        setActivated(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activated]);

  return activated;
};

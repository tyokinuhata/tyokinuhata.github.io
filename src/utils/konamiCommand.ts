import { useState, useEffect, useCallback } from "react";

export const konamiCommandSequence = [
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
 * コナミコマンドを検出するカスタムフック
 * @returns コナミコマンドが有効かどうかを示すboolean値
 */
export const useKonamiCommand = (): boolean => {
  const [konamiActivated, setKonamiActivated] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);

  const activateKonamiCommand = useCallback(() => {
    setKonamiActivated(true);
  }, []);

  useEffect(() => {
    const cleanupListener = setupKonamiCommandListener(
      activateKonamiCommand,
      setKeySequence,
      keySequence,
    );

    return cleanupListener;
  }, [keySequence, activateKonamiCommand]);

  return konamiActivated;
};

/**
 * キーボードイベントハンドラを設定する
 * @param callback コナミコマンドが入力された時に呼び出されるコールバック関数
 * @param setKeySequence キーシーケンスを更新する関数
 * @param keySequence 現在のキーシーケンス
 * @returns イベントハンドラの登録と解除を行う関数
 */
export const setupKonamiCommandListener = (
  callback: () => void,
  setKeySequence: (sequence: string[]) => void,
  keySequence: string[],
): (() => void) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    const updatedSequence = updateKeySequence(event, keySequence);
    setKeySequence(updatedSequence);

    if (isKonamiCommand(updatedSequence)) {
      callback();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
};

/**
 * キーボードイベントからキーシーケンスを更新する
 * @param event キーボードイベント
 * @param currentSequence 現在のキーシーケンス
 * @returns 更新されたキーシーケンス
 */
export const updateKeySequence = (event: KeyboardEvent, currentSequence: string[]): string[] => {
  // 現在のキーシーケンスに新しいキーを追加
  const newSequence = [...currentSequence, event.key];

  // 最新の10キーだけを保持
  return newSequence.slice(-konamiCommandSequence.length);
};

/**
 * 入力されたキーシーケンスがコナミコマンドと一致するか確認する
 * @param keySequence 入力されたキーシーケンス
 * @returns コナミコマンドと一致するかどうか
 */
export const isKonamiCommand = (keySequence: string[]): boolean => {
  if (keySequence.length !== konamiCommandSequence.length) {
    return false;
  }

  return keySequence.every((key, index) => key === konamiCommandSequence[index]);
};

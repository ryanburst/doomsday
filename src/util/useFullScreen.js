import { useState, useEffect, useMemo } from "react";

export const useFullScreen = () => {
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    const handleFullScreenChange = () => {
      setFullScreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const open = useMemo(() => {
    return () => {
      document.documentElement.requestFullscreen();
    };
  }, []);

  const close = useMemo(() => {
    return () => {
      document.exitFullscreen();
    };
  }, []);

  return { open, close, fullScreen };
};

export default useFullScreen;

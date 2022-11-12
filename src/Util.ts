export class Util {
  public static shiftString(str: string, shift: number): string {
    let result = "";
    for (let i = 0; i < shift; i++) {
      if (str.length > i) {
        result += str.charAt(i);
      } else {
        result += "&nbsp;";
      }
    }
    return result;
  }

  public static isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  public static track(cmd: string = "") {
    try {
      fetch("https://marioke.dev/track.php", {
        method: "POST",
        body: new URLSearchParams({
          cmd: cmd,
          resolution: `${window.screen.width}x${window.screen.height}`,
          platform: navigator.platform,
        }),
      });
    } catch (e) {
      console.warn(e);
    }
  }

  public static PlaySound() {
    let audio = new Audio("./sound.ogg");
    audio.volume = 0.5;
    audio.play();
  }
}

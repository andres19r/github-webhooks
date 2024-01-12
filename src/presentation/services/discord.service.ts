import { envs } from "../../config";

export class DiscordService {
  private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;

  constructor() {}

  async notify(message: string) {
    const body = {
      content: message,
      // embeds: [
      //   {
      //     image: {
      //       url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnE3OW5wemdpeDR0dGN3cnFyN3UxYmJjYnB5aXh1ZGphNGI3a3NiMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sTczweWUTxLqg/giphy.gif",
      //     },
      //   },
      // ],
    };

    const resp = await fetch(this.discordWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      console.log("Error sending message to discord");
      return false;
    }
    return true;
  }
}

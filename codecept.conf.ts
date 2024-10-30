import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
import 'dotenv/config';  // Add this line at the top

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();
require("./heal");

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true
    }
  },
  // ai: {
  //   request: async (messages) => {
  //     console.log('API Key length:', process.env.CLAUDE_API_KEY?.length);  // Add this line
  //     const Anthropic = require('@anthropic-ai/sdk');

  //     // Make sure your CLAUDE_API_KEY environment variable is set
  //     if (!process.env.CLAUDE_API_KEY) {
  //       throw new Error('CLAUDE_API_KEY environment variable is not set');
  //     }

  //     const anthropic = new Anthropic({
  //       apiKey: process.env.CLAUDE_API_KEY, // This must start with 'sk-'
  //     });

  //     const resp = await anthropic.messages.create({
  //       model: 'claude-2.1',
  //       max_tokens: 1024,
  //       messages,
  //       // Add system prompt if needed
  //       system: "You are a helpful AI assistant."
  //     });
  //     return resp.content.map((c) => c.text).join('\n\n');
  //   }
  // },
  ai: {
    request: async (messages) => {
      const Groq = require('groq-sdk');
      const groq = new Groq({
        apiKey: process.env.GROQ_API_KEY,
      });

      const chatCompletion = await groq.chat.completions.create({
        messages,
        model: "mixtral-8x7b-32768",
      });
      return chatCompletion.choices[0]?.message?.content || "";
    }
  },
  include: {
    I: './steps_file'
  },
  plugins: {
    heal: {
      enabled: true,
      output: './output', // directory where healing logs will be stored
      logs: true,
      deletePassed: false,
      listMode: 'all' // show all healing suggestions
    }
  },
  name: 'Koi-Auction-Testing'
}

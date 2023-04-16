const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config({ path: '.env' })

const configuration = new Configuration({
  apiKey: process.env.aiKey,
});

const openai = new OpenAIApi(configuration);


async function GenerateImage(data) {
    // console.log(data)
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt:data,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    const answer = response.data.choices[0].text;


    let d = new Date();
// console.log(d)


  const dataEmbed = {
	color: 0x4df85f,
	title: `${data}`,
	description: `>>> ${answer}`,

    fields: [
        {
			name: `\u200b`,
			value: `Join us [__Twitter__](https://twitter.com/akashmaher20), [__Discord__](https://discord.gg/DVd7fKwA4k)`,
			inline: false
		}
	],

	timestamp: d.toISOString(),
	footer: {
		text: `Bot Developer: Ak!`,
		icon_url: 'https://www.movinfrens.com/images/team/ak.gif',
	},
};
return dataEmbed
}

module.exports = {GenerateImage}









// const { Configuration, OpenAIApi } = require("openai");
// require('dotenv').config({ path: '.env' })

// const configuration = new Configuration({
//   apiKey: process.env.aiKey,
// });

// const openai = new OpenAIApi(configuration);


// async function GenerateImage(data) {
//     const response = await openai.createImage({
//     prompt: data,
//     n: 1,
//     size: "1024x1024",
//     });
//     image_url = response.data.data[0].url;
//     return image_url;
// }

// module.exports = {GenerateImage}
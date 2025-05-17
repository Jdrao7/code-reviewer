const aiService = require("../services/ai.service")

module.exports.getReview = async (req,res)=>{
        const code= req.body.code;
	let isEnglish=Boolean(req.body.lang);

        if(!code){
                return res.status(400).send("code is required");
        }

	const prompt = `${isEnglish ? 
	`Please review the following code:\n\`\`\`\n${code}\n\`\`\`\nGive suggestions in English with emojis.`
	:
	`Kripya neeche diye gaye code ka review kijiye:\n\`\`\`\n${code}\n\`\`\`\nSuggestions in full Hinglish with emojis.`
}`;

	const review = await aiService(prompt);

	res.send(review);
}

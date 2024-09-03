import fs from "fs";
import matter from "gray-matter";

const getRecipesMetaData = baseFolder => {
    const folder = baseFolder + "/";
    const files = fs.readdirSync(folder);

    const markdown_files = files.filter(file => file.endsWith(".md"));

    const loaded_md_files = markdown_files.map(file => {
        const file_contents = fs.readFileSync(`${baseFolder}/${file}`, "utf8");
        const matterResults = matter(file_contents);
        return {
            title: matterResults.data.title,
            cook_time: matterResults.data.cook_time,
            author: matterResults.data.author,
            created_at: matterResults.data.created_at,
            description: matterResults.data.description,
        };
    });
    return loaded_md_files;
};

export default getRecipesMetaData;

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), '_content');

export function getAllPosts(){
    console.log(contentDirectory)
    const allPosts = fs.readdirSync(contentDirectory); 
    
    return allPosts.map(fileName => {
        const slug = fileName.replace('.md', '');
        const fileContents = fs.readFileSync(
            path.join(contentDirectory, fileName),
            'utf8'
        );
        const { data, content } = matter(fileContents);
        console.log(data, content);
        return {
            data,
            content,
            slug,
        };
    })
}


// export const blogPosts = [
//     {
//         title : 'first test post',
//         slug : 'my-first',
//         date : new Date().toISOString(),
//         content : 'kkdkdkdkdkdkdkdkdkdkdkd'
//     },
//     {
//         title : 'second test post',
//         slug : 'my-second',
//         date : new Date().toISOString(),
//         content : 'kkdkdkdkdkdkdkdkdkdkdkd'
//     },
//     {
//         title : 'third test post',
//         slug : 'my-third',
//         date : new Date().toISOString(),
//         content : 'kkdkdkdkdkdkdkdkdkdkdkd'
//     }
// ]
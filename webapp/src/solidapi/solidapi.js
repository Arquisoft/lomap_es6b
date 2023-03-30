import {
    overwriteFile
} from '@inrupt/solid-client';



async function writeData(session, url, file) {
    let result = true;
    try {
        await overwriteFile(
            url,
            file,
            { contentType: file.type, fetch: session.fetch }
        );
    } catch (error) {
        result = false;
    }
    return result;
}





export { writeData };
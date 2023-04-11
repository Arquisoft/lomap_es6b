import {
    overwriteFile, getFile, getSolidDataset, getContainedResourceUrlAll
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


async function readData(session, url) {
    let parts = url.split("/");
    let name = parts[parts.length - 1];
    try {
        let blob = await getFile(
            url,
            { fetch: session.fetch }
        );
        return new File([blob], name, { type: blob.type });
    } catch (error) {
        return null;
    }
}

async function findDataInContainer(session, url) {
    try {
        let dataset = await getSolidDataset(
            url,
            { fetch: session.fetch }
        );

        let urls = getContainedResourceUrlAll(dataset);
        let files = [];
        for (const element of urls) {
            let file = await readData(session, element);
            if (file != null) {
                files.push(file);
            }
        }
        return files;
    } catch (error) {
        return null;
    }
}




export { writeData, findDataInContainer };
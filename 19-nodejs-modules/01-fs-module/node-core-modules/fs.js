
// Write to a file //
// const fs = require('fs');

// fs.writeFile('file.txt', 'Hello World', (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log('File created');
// });

// Promise version
// const fs = require('fs/promises');
// fs.writeFile('file2.txt', 'Hello World')
//   .then(() => console.log('File created'))
//   .catch((err) => console.log(err));

  // Sync version // 
  // const fs = require('fs');

  // fs.writeFileSync('file3.txt', 'Hello World 3');
  // console.log('File created !');

  // Async/await version
  const fs = require('fs/promises');

  async function createFile(fileName, content) {
    try {
      fs.writeFile(fileName, content);
      console.log('File created :)');
    } catch (error) {
      console.log(err);
    }
  }

  // Read a file
  async function readAFile(fileName) {
    try {
      const data = await fs.readFile(fileName, 'utf-8');
      console.log(data);
    } catch (error) {
      console.log(err);
    }
  }

  // Delete a file
  async function deleteFile(fileName) {
    try {
      await fs.unlink(fileName);
      console.log(`File ${fileName} deleted`)
    } catch (error) {
      console.log(error);
    }
  }

  // Rename a filr
  async function renameFile(oldName, newName) {
    try {
      await fs.rename(oldName, newName);
      console.log('File renamed');
    } catch (error) {
      console.log(err);
    }
  }

  // Create a Folder
  async function createFolder(folderName) {
    try {
      await fs.mkdir(folderName);
      console.log('Folder created');
    } catch (error) {
      console.log(err);
    }
  }

  createFolder('Folder');
  // renameFile('file.txt', 'file1.txt');
  // deleteFile('file4.txt');

  // readAFile('file.txt');
// createFile('file4.txt', 'Hello world 4 !');
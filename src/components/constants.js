import ReadmeFile from '../assets/icons/readmeFile';
import DefaultFile from '../assets/icons/defaultFile';
import GitFile from '../assets/icons/gitFile';
import JsonFile from '../assets/icons/jsonFile';
import YarnFile from '../assets/icons/yarnFile'

export const fileTypes = {
    ".env.development": DefaultFile,
    ".gitignore": GitFile,
    ".node-version": DefaultFile,
    "CONTRIBUTING.md": DefaultFile,
    "package.json": JsonFile,
    "README.md": ReadmeFile,
    "yarn.lock": YarnFile
}
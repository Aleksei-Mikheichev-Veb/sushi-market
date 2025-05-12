export const textTransform = (text) => {
        const toUpperCaseFirstLetter = text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase();
        const transformStructure = toUpperCaseFirstLetter.split(',').join(', ');
        return transformStructure;
}
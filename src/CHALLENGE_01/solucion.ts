function resolve(input_string: string): string {
    const wordCount = input_string
        .split(" ")
        .map((word) => word.toLowerCase())
        .reduce<Record<string, number>>((count, word) => {
            if (word in count) {
                count[word] += 1;
                return count;
            }

            count[word] = 1;
            return count;
        }, {});

    const keys = Object.keys(wordCount);

    const wordsWithNumbers = keys.map((key) => {
        return `${key}${wordCount[key]}`;
    });
    
    return wordsWithNumbers.join("");
}

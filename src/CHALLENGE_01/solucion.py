def resolve(input_string: str) -> str:
    words = input_string.split(" ")
    normalized_words = [word.lower() for word in words]

    count = {}
    for word in normalized_words:
        if word not in count.keys():
            count[word] = 0

        count[word] += 1

    return "".join([f"{word}{count[word]}" for word in count.keys()])

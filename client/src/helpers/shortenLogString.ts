export function shortenLongStrings(textString: string, maxLength = Infinity) {
    return textString.length < maxLength
      ? textString.substring(0, maxLength)
      : textString.substring(0, maxLength) + '...';
  }
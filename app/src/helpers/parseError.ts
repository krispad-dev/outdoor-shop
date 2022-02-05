
function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
}

const reportError = ({ message }: { message: string }) => {
    return message;
}


export function parseError(error: unknown) {

    return reportError({ message: getErrorMessage(error) })

}
export const dateUtil = (date) => {

    const secs = Math.floor((new Date() - new Date(date)) / 1000);

    let timeChunk;

//    console.log(secs)
    let sincePost = Math.floor(secs / (365 * 24 * 60 * 60));
    // console.log(sincePost)
    if (sincePost >= 1) {
       timeChunk = sincePost + ' year ago';
        } else {
        // console.log(secs)
        sincePost = Math.floor(secs / (30 * 24 * 60 * 60));
        // console.log(sincePost)
        if (sincePost >= 1) {
            timeChunk = sincePost + ' months ago';
            } else {
            // console.log(secs)
            sincePost = Math.floor(secs / (7 * 24 * 60 * 60));
            // console.log(sincePost)
            if (sincePost >= 1) {
                timeChunk = sincePost + ' weeks ago';
                } else {
                // console.log(secs)
                sincePost = Math.floor(secs / (24 * 60 * 60));
                // console.log(sincePost)
                if (sincePost >= 1) {
                    timeChunk = sincePost + ' days ago';
                    } else {
                    // console.log(secs)
                    sincePost = Math.floor(secs / (60 * 60));
                    // console.log(sincePost)
                    if( sincePost >= 1 ) {
                        timeChunk = sincePost + ' hours ago';
                        } else {
                        // console.log(secs)
                        sincePost = Math.floor(secs / 60);
                        // console.log(sincePost)
                        if (sincePost >= 1) {
                            timeChunk = sincePost + ' minutes ago';
                            } else {
                            sincePost = secs + ' seconds ago';
                        }
                    }
                }
            }
        }
    }

    return timeChunk;

}
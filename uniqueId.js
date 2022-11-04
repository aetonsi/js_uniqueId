/**
 * Transformer function to be used with uniqueId.
 * @callback transformerFunction
 * @param {number} timestamp
 * @returns {any}
 */


/**
 * Very simple function to generate a unique id, the current timestamp.
 * Uniqueness is enforced simply by skipping 1 millisecond (empty loop), so that the generated id (timestamp) will be always unique.
 * Please pay attention: calling this function 1000 times in a row means blocking the thread for at least 1 second (1000 milliseconds)
 *
 * @param {transformerFunction} transformerFunction Optional parameter. The resulting id (timestamp) will be passed through this function before being returned.
 *      By default, it is an identity function. This function receives 1 input, the resulting id/timestamp (of type: number), and can output anything you need.
 * @returns {number|any} id
 */
function uniqueId(transformerFunction = timestamp => timestamp) {
    const start = Date.now();
    while (Date.now() < start + 1);
    return transformerFunction(Date.now());
}


export default uniqueId;

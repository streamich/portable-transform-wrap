

function portable_transform_wrap(file, props) {
    if(props.ext) {
        // TODO: change extension
    }
    file.raw = props.func + '(' + JSON.stringify(file.raw) + ')'
}

module.exports = file;
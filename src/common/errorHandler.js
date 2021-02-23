export default error => {
    const data = error.response ? error.response.data : { errors: [error.message] };
    let errors = [];

    if (data.errors)
        errors = errors.concat(data.errors);

    return errors;
}
import PropTypes from 'prop-types';

export const Filter = ({ onChange }) => {
    const handleChange = e => {
        e.preventDefault();
        const val = e.target.value.toLowerCase();
        onChange(val);
    }

    return (
        <label htmlFor="filter">Find contacts by name <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$}"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange} /></label>)
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired
};
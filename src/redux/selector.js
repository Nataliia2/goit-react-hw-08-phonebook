export const getContacts = state => state.contacts;

export const getStatusFilter = state => state.filters;

export  const getFilter = ({contacts, filter}) => {
    if (!filter) {
      return contacts;
    }

    const normalaizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => {
      const normalaizedName = name.toLowerCase();
      const result = normalaizedName.includes(normalaizedFilter);
      return result;
    });
  };

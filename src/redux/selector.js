export const getContacts = state => state.items;
export const getStatusFilter = state => state.filters;
export const getError = state => state.contacts.error;
export const getIsLoading = state => state.contacts.isLoading;

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

export const getContacts = state => state.contacts.items;
export const getStatusFilter = state => state.filters;
export const getError = state => state.contacts.error;
export const getIsLoading = state => state.contacts.isLoading;

export  const getFilter = ({contacts, filter}) => {
    if (!filter) {
      return contacts.items;
    }

    const normalaizedFilter = filter.toLowerCase();

    return contacts.items.filter(({ name }) => {
      const normalaizedName = name.toLowerCase();
      const result = normalaizedName.includes(normalaizedFilter);
      return result;
    });
  };

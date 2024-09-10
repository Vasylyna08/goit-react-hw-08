import toast from 'react-hot-toast';

export const showSuccess = () => {
  toast.success(`Successfully!`);
};

export const showError = (message = 'Ops, something went wrong!') => {
  toast.error(message);
};

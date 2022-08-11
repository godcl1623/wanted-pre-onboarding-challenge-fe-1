import returnApis from 'api/returnApis';

const loginController = async (emailValue: string, passwordValue: string) => {
  const { postData } = returnApis();

  try {
    const response = await postData<string, string>(
      '/users/login',
      `email=${emailValue}&password=${passwordValue}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export default loginController;

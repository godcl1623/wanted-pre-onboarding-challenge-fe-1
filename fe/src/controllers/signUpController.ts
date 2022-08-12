import returnApis from 'api/returnApis';

const signUpController = async (emailValue: string, passwordValue: string) => {
  const { postData } = returnApis();
  let result;

  try {
    const response = await postData<string, string>(
      '/users/create',
      `email=${emailValue}&password=${passwordValue}`,
    );
    result = response.data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }

  return result;
};

export default signUpController;

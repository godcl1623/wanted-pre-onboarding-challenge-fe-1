import communicateServerBy from 'api/communicateServerBy';

const loginController = async (emailValue: string, passwordValue: string) => {
  const { postData } = communicateServerBy();

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

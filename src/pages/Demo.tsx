import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormWrapper from '../core/form/FormWrapper';
import TextFieldC from '../core/form/TextField';
import { useAppSelector } from '../core/store';
import { selectUserStore } from '../core/store/selector';
import { useGetUserById } from '../hooks';

interface DemoProps {}
interface FormDemoI {
  id: string;
}
const Demo: React.FunctionComponent<DemoProps> = () => {
  const { isTriedLogin: isLogin } = useAppSelector(selectUserStore);

  const methods = useForm<FormDemoI>({});

  const [id, setId] = useState('');
  const { data } = useGetUserById(id);
  const onSubmit = (data: FormDemoI) => {
    setId(data.id);
  };

  return (
    <>
      {isLogin ? (
        <div>
          <div className="">You loggin:</div>
          <FormWrapper methods={methods} onSubmit={onSubmit}>
            <TextFieldC name="id" label="id" type="text" dir="" />
            <input type="submit" />
          </FormWrapper>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <div>You currently not logged in</div>
      )}
    </>
  );
};

export default Demo;

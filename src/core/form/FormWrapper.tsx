import { FormProvider, UseFormReturn } from 'react-hook-form';
import { CustomFC } from '../interface/component';

interface FormWrapperProps extends CustomFC {
  methods: UseFormReturn<any>;
  onSubmit: (data: any) => void;
}

const FormWrapper: React.FunctionComponent<FormWrapperProps> = ({
  methods,
  onSubmit,
  children,
}) => {
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </>
  );
};

export default FormWrapper;

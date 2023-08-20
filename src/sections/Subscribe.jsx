import { TitleText } from '../components/CustomTexts';
import { Button } from '../components';

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <TitleText
        title={
          <h3>
            Sign Up for <span className="text-coral-red">Updates</span> &
            Newsletter
          </h3>
        }
        textStyles="font-palanquin leading-[68px] lg:max-w-lg text-center text-4xl font-bold"
      />
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

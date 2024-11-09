import { Link } from '@/i18n/routing';
import { shortenAddress, yoctoToNear } from '@/utils/libs';
import { ActionPropsInfo } from '@/utils/types';

const Transfer = (props: ActionPropsInfo) => {
  const FaRight = (props: { className: string }) => {
    return (
      <svg
        className={props.className}
        fill="currentColor"
        height="1em"
        stroke="currentColor"
        stroke-width="0"
        viewBox="0 0 192 512"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
      </svg>
    );
  };
  return (
    <div className="action flex flex-wrap items-center break-all leading-7">
      <FaRight className="inline-flex text-gray-400 dark:text-neargray-10 text-xs" />
      <span className="font-bold px-1">
        Transfer{' '}
        <span className="font-normal pl-1">
          {yoctoToNear(props?.action?.args?.deposit, true)} Ⓝ
        </span>
      </span>
      <span className="font-bold text-gray px-1">
        From{' '}
        <Link
          className="text-green-500 dark:text-green-250 font-normal pl-1 hover:no-underline"
          href={`/address/${props?.action?.from}`}
        >
          {shortenAddress(props?.action?.from)}
        </Link>
      </span>
      <span className="font-bold text-gray px-1">
        To{' '}
        <Link
          className="text-green-500 dark:text-green-250 font-normal pl-1 hover:no-underline"
          href={`/address/${props?.action?.to}`}
        >
          {shortenAddress(props?.action?.to)}
        </Link>
      </span>
    </div>
  );
};

export default Transfer;

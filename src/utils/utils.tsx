import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";
import toast, { Renderable, Toast, ValueFunction } from "react-hot-toast";
import CNotificationToast from "./CNotificationToast";

export const showSuccess = (message = 'Success', timeout = 2000) => {
    toast(message, {
      id: 'success-toast',
      position: 'top-center',
      icon: <CheckCircleIcon className="text-green-400 h-5" />,
      className:
        'text-xs sm:text-sm leading-5 font-medium text-green-600 bg-green-50 lg:max-w-md 2xl:max-w-lg',
      duration: timeout
    });
  };
  
  export const showError = (error: Renderable | ValueFunction<Renderable, Toast>, timeout = 2000) => {
    toast(error, {
      id: 'error-toast',
      position: 'top-center',
      icon: <XCircleIcon className="text-red-500 h-5" />,
      className:
        'text-xs sm:text-sm leading-5 font-medium text-red-600 bg-red-100 lg:max-w-md 2xl:max-w-lg',
      duration: timeout
    });
  };
  
  export const showInfo = (message: Renderable | ValueFunction<Renderable, Toast>, timeout = 2000) => {
    toast(message, {
      style: { backgroundColor: '#5660ea' },
      className: 'text-xs sm:text-sm leading-5 font-medium',
      duration: timeout
    });
  };
  
  export const showCopyToClipboard = (message = 'Copied!', timeout = 2000) => {
    toast(message, {
      style: { backgroundColor: '#9CA3AF', color: 'white' },
      position: 'top-center',
      className:
        'text-xs sm:text-sm leading-5 font-medium text-green-600 bg-green-50 lg:max-w-md 2xl:max-w-lg',
      duration: timeout
    });
  };
  
  export const showNotification = (
    title: any,
    body: any,
    notificationType: any,
    isRedirect: any,
    route: any,
    searchParams: any,
    timeout = 4000
  ) => {
    toast.custom(
      (t) => (
        <CNotificationToast
          title={title}
          type={notificationType}
          body={body}
          isRedirect={isRedirect}
          route={route}
          searchParams={searchParams}
          t={t}
        />
      ),
      {
        id: `${notificationType}-notification`,
        position: 'top-right',
        duration: timeout
      }
    );
  };
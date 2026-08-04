interface SuccessAlertProps {
  message: string;
}

export default function SuccessAlert({
  message,
}: SuccessAlertProps) {
  return (
    <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-center font-semibold text-green-700 shadow-sm">
      {message}
    </div>
  );
}
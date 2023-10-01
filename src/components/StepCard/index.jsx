import { Step } from "react-impressjs";

// export default function StepCard({ id, className, data, children, color }) {
//   return (
//     <Step
//       id={"step"}
//       className={className}
//       data={data}
//       style={{
//         borderColor: color,
//       }}
//     >
//       {children}
//     </Step>
//   );
// }

export default function StepCard({ children, color }) {
  return <Step id="red">{children}</Step>;
}

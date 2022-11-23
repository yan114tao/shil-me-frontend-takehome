import { useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";

import Button from "./builder-components/Button";
import InputLongText from "./builder-components/InputLongText";
import InputNumber from "./builder-components/InputNumber";
import Title from "./builder-components/Title";
import Text from "./builder-components/Text";
import Description from "./builder-components/Description";

const useBuilderItemContent = (config, register) => {
  return useMemo(
    () => ({
      text: () => <Text {...config} register={register} />,
      "input-long-text": () => (
        <InputLongText {...config} register={register} />
      ),
      "input-number": () => <InputNumber {...config} register={register} />,
      button: () => <Button {...config} />,
    }),
    [config, register]
  );
};

const BuilderItem = ({ itemConfig, register }) => {
  const content = useBuilderItemContent(itemConfig, register);
  const ItemComponent = content[itemConfig?.type];

  if (!ItemComponent) return null;

  return <ItemComponent />;
};

export default function Builder({
  config: { title, description, style = {}, components },
}) {
  const { register, watch } = useForm();
  const watchAllFields = watch();

  // watch builder state changes
  useEffect(() => {
    console.log("builder content:", watchAllFields);
  }, [watchAllFields]);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "15px 0px",
        ...style,
      }}
      onSubmit={(e) => {
        e.preventDefault();
        return false;
      }}
    >
      {title && <Title title={title} />}
      {description && <Description description={description} />}
      {components?.length > 0 &&
        components.map((item, index) => (
          <BuilderItem key={index} itemConfig={item} register={register} />
        ))}
    </form>
  );
}

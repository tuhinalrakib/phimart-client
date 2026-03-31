import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ProfileForm from "../components/dashboard/profile/ProfileForm";
import PasswordChangeForm from "../components/dashboard/profile/PasswordChangeForm";
import ProfileButtons from "../components/dashboard/profile/ProfileButtons";
import { useNavigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate()
  const { user, updateUserProfile, changePassword, errorMsg } =
    useAuthContext();
  const {
    register,
    handleSubmit,
    watch,
    setValue,

    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    Object.keys(user).forEach((key) => setValue(key, user[key]));
  }, [user, setValue]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Profile update
      const profilePayload = {
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        phone_number: data.phone_number,
      };

      await updateUserProfile(profilePayload);
      // Password Change
      if (data.current_password && data.new_password) {
        await changePassword({
          current_password: data.current_password,
          new_password: data.new_password,
        });
      }
      navigate("/dashboard")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      data-theme="light"
      className="card w-full max-w-2xl mx-auto bg-base-200 shadow-xl"
    >
      <div className="card-body">
        {errorMsg && <ErroAlert error={errorMsg} />}
        <h2 className="card-title text-2xl mb-4">Profile Information</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <ProfileForm
            register={register}
            errors={errors}
            isEditing={isEditing}
          />

          <PasswordChangeForm
            errors={errors}
            register={register}
            isEditing={isEditing}
            watch={watch}
          />

          <ProfileButtons
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            isSubmitting={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;
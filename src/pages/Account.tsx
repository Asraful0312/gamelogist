import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Account = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <section className="-mt-10 mb-36 rounded">
      <div className="w-full max-w-lg h-full mx-auto bg-neutral-950  py-8 px-7">
        <div className="flex  justify-center">
          <div>
            <img
              className="object-cover size-32 rounded-full"
              src="/images/3.jpeg"
              alt="user profile"
            />

            <h2 className="text-center text-xl mt-4  font-medium">
              Asraful Islam
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-14">
          <h2>Email:</h2>
          <Input
            title="Can't change"
            disabled
            className="border-none bg-neutral-900 rounded-md"
            value="rayhan@gmail.com"
          />
        </div>

        <div className="flex items-center gap-2 mt-7">
          <h2>Password:</h2>
          <Input
            title="Can't change"
            disabled
            className="border-none bg-neutral-900 rounded-md"
            value="***********"
          />
        </div>

        <div className="mt-7">
          <label htmlFor="description">Description:</label>
          <textarea
            disabled={!isEdit}
            id="description"
            rows={5}
            className="border-none bg-neutral-900 rounded-md outline-none w-full p-6 mt-3"
            value="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, saepe fugit! Quod, ipsa rerum sapiente eveniet accusamus modi dolor!"
          />

          <div className="flex justify-start mt-5">
            <Button
              onClick={() => setIsEdit((prev) => !prev)}
              variant="secondary"
            >
              {!isEdit ? "Edit" : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;

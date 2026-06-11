"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  value: string;
  onChange: (url: string) => void;
}

export default function ImageUploader({
  value,
  onChange,
}: Props) {

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {

      const file =
        acceptedFiles[0];

      if (!file) return;

      const formData =
        new FormData();

      formData.append(
        "file",
        file
      );

      const response =
        await fetch(
          "/api/upload",
          {
            method: "POST",
            body: formData,
          }
        );

      const result =
        await response.json();

      onChange(
        result.url
      );

    },
    [onChange]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
  });

  return (
    <div className="space-y-4">

      <div
        {...getRootProps()}
        className={`
          border-2
          border-dashed
          rounded-3xl
          p-10
          text-center
          cursor-pointer
          transition
          ${
            isDragActive
              ? "border-red-500"
              : "border-white/20"
          }
        `}
      >

        <input
          {...getInputProps()}
        />

        <p>
          Drag & Drop Product Image
        </p>

        <p className="text-sm opacity-60 mt-2">
          or click to upload
        </p>

      </div>

      {value && (

        <img
          src={value}
          alt=""
          className="
          w-full
          rounded-2xl
          max-h-96
          object-cover
          "
        />

      )}

    </div>
  );
}
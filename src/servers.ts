import { DataSend, Response } from "./steps-form/interfaces/steps-form";

export const registerProfile = async (
  url: string,
  data: DataSend
): Promise<Response> => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error de conexion");
    }
    const responseData = await response.json();
    return responseData as Response;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};

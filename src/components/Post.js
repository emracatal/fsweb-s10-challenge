import React from "react";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import { notSil, notSilAPI } from "../actions";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

export default function Post({ item }) {
  const dispatch = useDispatch();
  function handleSil() {
    // burada ilgili eylemi dispatch edin
    dispatch(notSilAPI(item.id));

    // sonra toast mesajı gösterin
    swal("sildin!", "aferin!", "info");
  }

  return (
    <div className="beyazKutu p-8 pb-6 mb-4 text-sm">
      <h1>
        {formatDistanceToNow(new Date(item.date), {
          addSuffix: true,
          locale: tr,
        })}
      </h1>

      {item.body.split("|").map((li) => (
        <p className="mt-2" key={li}>
          - {li}
        </p>
      ))}

      <button
        className="text-xs text-amber-600 mt-4 underline"
        onClick={handleSil}
      >
        Bu notu sil
      </button>
    </div>
  );
}

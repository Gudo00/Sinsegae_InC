import React, {type FormEvent, useRef} from "react";
import {testTodoAdd, testTodoAddForm} from "~/api/todoAPI";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import LoadingComponent from "~/components/common/loadingComponent";
import ResultComponent from "~/components/common/resultComponent";
import {useNavigate} from "react-router";

function TodoAddComponent() {



    const formRef = useRef<HTMLFormElement | null>(null);

    const query = useQueryClient();

    const navigate = useNavigate();

    const addMutation = useMutation({
        mutationFn: testTodoAddForm,
        onSuccess: (data) => {
            query.invalidateQueries({queryKey: ['todos'] })
        }
    })

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        const form = formRef.current;

        if(!form) {
            return;
        }else {

            const formData = new FormData(form);
            addMutation.mutate(formData);

            //2버전
            // const formData = new FormData(form);
            // const title = formData.get("title") as string;
            // const writer = formData.get("writer") as string;
            //
            // console.log("FormData 수집:", { title, writer });


            //1버전
            // const titleInput = form.elements.namedItem("title") as HTMLInputElement | null;
            // const writerInput = form.elements.namedItem("writer") as HTMLInputElement | null;
            // const title = titleInput?.value ?? "";
            // const writer = writerInput?.value ?? "";
            //
            // addMutation.mutate({title,writer})
            //old
            //testTodoAdd({title,writer})

        }


        // 여기서 서버 전송 또는 다른 작업 가능
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">글 작성</h2>

                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-600 mb-1">
                        제목
                    </label>
                    <input
                        name="title"
                        id="title"
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="제목을 입력하세요"
                        required={true}
                    />
                </div>

                <div>
                    <label htmlFor="writer" className="block text-sm font-medium text-gray-600 mb-1">
                        작성자
                    </label>
                    <input
                        name="writer"
                        id="writer"
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="작성자 이름"
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor="writer" className="block text-sm font-medium text-gray-600 mb-1">
                        첨부파일
                    </label>
                    <input
                        name="file"
                        id="writer"
                        type="file"
                        className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-500"
                        multiple={true}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    제출하기
                </button>
            </form>

            {addMutation.isPending && <LoadingComponent isLoading={addMutation.isPending}  />}
            {addMutation.data && <ResultComponent msg={'등록완료'} closeFn={() => {
                navigate("/todo/list")
            }}/> }
        </div>
    );
}

export default TodoAddComponent;

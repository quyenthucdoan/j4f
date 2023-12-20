import React, { createElement } from "react";
import Post from "./Post";

const contentList = [
  {
    title:
      "[HN/HCM] Chương Trình Đào Tạo Tài Năng Nghiên cứu AI - VinAI Residency Program Part-time/Full-time Batch 11",
    date: "12/12/2023",
    author: "Quyen Thuc Doan",
    content:
      "Công ty VinAI (thuộc tập đoàn Vingroup) chuyên nghiên cứu những vấn đề cơ bản của trí tuệ nhân tạo (AI), từ cốt lõi là những thuật toán như máy học (machine learning), học sâu (deep learning),.. và áp dụng trong một số lĩnh vực thực tế như hiểu được nội dung hình ảnh, ngôn ngữ, giọng nói và hành vi tương tác người dùng. Năm 2022, VinAI được công nhận là đại diện Việt Nam duy nhất nằm trong top 20 các công ty toàn cầu dẫn đầu về nghiên cứu AI trong năm 2022. \nĐược thành lập năm 2019, chương trình VinAI Residency Program là chương trình đào tạo tài năng nghiên cứu AI đầu tiên và danh giá nhất Việt Nam. Cho đến nay, chương trình đã đào tạo hơn 100 nhân tài, đặc biệt trong đó có gần 50 nhân tài đang học Tiến sỹ tại các trường TOP 20 toàn cầu trong lĩnh vực AI. \nVới lộ trình đào tạo chuyên sâu trong vòng 2 năm, thành viên chương trình được cung cấp đầy đủ cơ sở vật chất, các khóa học và người hướng dẫn là giáo sư, tiến sĩ đầu ngành để phục vụ cho những dự án nghiên cứu lớn, cạnh tranh tại các hội nghị khoa học hàng đầu trên trường quốc tế. Không chỉ vậy, những AI Resident này còn được đào tạo toàn diện, không chỉ tập trung nghiên cứu chuyên sâu mà còn có những cơ hội học tập, rèn luyện kỹ năng mềm, khả năng ngôn ngữ, tư duy doanh nghiệp,... để trở thành những nhân tố xuất sắc và có tầm ảnh hưởng trong cộng đồng.​\nỨNG TUYỂN NGAY BATCH 11.",
  },
  {
    title: "Doan Thuc Quyen ăn kem",
    date: "12/12/2023",
    author: "Quyen Thuc Doan",
    content:
      "Công ty VinAI (thuộc tập đoàn Vingroup) chuyên nghiên cứu những vấn đề cơ bản của trí tuệ nhân tạo (AI), từ cốt lõi là những thuật toán như máy học (machine learning), học sâu (deep learning),.. và áp dụng trong một số lĩnh vực thực tế như hiểu được nội dung hình ảnh, ngôn ngữ, giọng nói và hành vi tương tác người dùng. Năm 2022, VinAI được công nhận là đại diện Việt Nam duy nhất nằm trong top 20 các công ty toàn cầu dẫn đầu về nghiên cứu AI trong năm 2022. \nĐược thành lập năm 2019, chương trình VinAI Residency Program là chương trình đào tạo tài năng nghiên cứu AI đầu tiên và danh giá nhất Việt Nam. Cho đến nay, chương trình đã đào tạo hơn 100 nhân tài, đặc biệt trong đó có gần 50 nhân tài đang học Tiến sỹ tại các trường TOP 20 toàn cầu trong lĩnh vực AI. \nVới lộ trình đào tạo chuyên sâu trong vòng 2 năm, thành viên chương trình được cung cấp đầy đủ cơ sở vật chất, các khóa học và người hướng dẫn là giáo sư, tiến sĩ đầu ngành để phục vụ cho những dự án nghiên cứu lớn, cạnh tranh tại các hội nghị khoa học hàng đầu trên trường quốc tế. Không chỉ vậy, những AI Resident này còn được đào tạo toàn diện, không chỉ tập trung nghiên cứu chuyên sâu mà còn có những cơ hội học tập, rèn luyện kỹ năng mềm, khả năng ngôn ngữ, tư duy doanh nghiệp,... để trở thành những nhân tố xuất sắc và có tầm ảnh hưởng trong cộng đồng.​\nỨNG TUYỂN NGAY BATCH 11.",
  },
  {
    title: "Kẹo dẻo vị dâu",
    date: "12/12/2023",
    author: "Quyen Thuc Doan",
    content:
      "Công ty VinAI (thuộc tập đoàn Vingroup) chuyên nghiên cứu những vấn đề cơ bản của trí tuệ nhân tạo (AI), từ cốt lõi là những thuật toán như máy học (machine learning), học sâu (deep learning),.. và áp dụng trong một số lĩnh vực thực tế như hiểu được nội dung hình ảnh, ngôn ngữ, giọng nói và hành vi tương tác người dùng. Năm 2022, VinAI được công nhận là đại diện Việt Nam duy nhất nằm trong top 20 các công ty toàn cầu dẫn đầu về nghiên cứu AI trong năm 2022. \nĐược thành lập năm 2019, chương trình VinAI Residency Program là chương trình đào tạo tài năng nghiên cứu AI đầu tiên và danh giá nhất Việt Nam. Cho đến nay, chương trình đã đào tạo hơn 100 nhân tài, đặc biệt trong đó có gần 50 nhân tài đang học Tiến sỹ tại các trường TOP 20 toàn cầu trong lĩnh vực AI. \nVới lộ trình đào tạo chuyên sâu trong vòng 2 năm, thành viên chương trình được cung cấp đầy đủ cơ sở vật chất, các khóa học và người hướng dẫn là giáo sư, tiến sĩ đầu ngành để phục vụ cho những dự án nghiên cứu lớn, cạnh tranh tại các hội nghị khoa học hàng đầu trên trường quốc tế. Không chỉ vậy, những AI Resident này còn được đào tạo toàn diện, không chỉ tập trung nghiên cứu chuyên sâu mà còn có những cơ hội học tập, rèn luyện kỹ năng mềm, khả năng ngôn ngữ, tư duy doanh nghiệp,... để trở thành những nhân tố xuất sắc và có tầm ảnh hưởng trong cộng đồng.​\nỨNG TUYỂN NGAY BATCH 11.",
  },
  {
    title: "Pop it!!!!",
    date: "12/12/2023",
    author: "Quyen Thuc Doan",
    content:
      "Công ty VinAI (thuộc tập đoàn Vingroup) chuyên nghiên cứu những vấn đề cơ bản của trí tuệ nhân tạo (AI), từ cốt lõi là những thuật toán như máy học (machine learning), học sâu (deep learning),.. và áp dụng trong một số lĩnh vực thực tế như hiểu được nội dung hình ảnh, ngôn ngữ, giọng nói và hành vi tương tác người dùng. Năm 2022, VinAI được công nhận là đại diện Việt Nam duy nhất nằm trong top 20 các công ty toàn cầu dẫn đầu về nghiên cứu AI trong năm 2022. \nĐược thành lập năm 2019, chương trình VinAI Residency Program là chương trình đào tạo tài năng nghiên cứu AI đầu tiên và danh giá nhất Việt Nam. Cho đến nay, chương trình đã đào tạo hơn 100 nhân tài, đặc biệt trong đó có gần 50 nhân tài đang học Tiến sỹ tại các trường TOP 20 toàn cầu trong lĩnh vực AI. \nVới lộ trình đào tạo chuyên sâu trong vòng 2 năm, thành viên chương trình được cung cấp đầy đủ cơ sở vật chất, các khóa học và người hướng dẫn là giáo sư, tiến sĩ đầu ngành để phục vụ cho những dự án nghiên cứu lớn, cạnh tranh tại các hội nghị khoa học hàng đầu trên trường quốc tế. Không chỉ vậy, những AI Resident này còn được đào tạo toàn diện, không chỉ tập trung nghiên cứu chuyên sâu mà còn có những cơ hội học tập, rèn luyện kỹ năng mềm, khả năng ngôn ngữ, tư duy doanh nghiệp,... để trở thành những nhân tố xuất sắc và có tầm ảnh hưởng trong cộng đồng.​\nỨNG TUYỂN NGAY BATCH 11.",
  },
  {
    title: "Pop it!!!!",
    date: "12/12/2023",
    author: "Quyen Thuc Doan",
    content:
      "Công ty VinAI (thuộc tập đoàn Vingroup) chuyên nghiên cứu những vấn đề cơ bản của trí tuệ nhân tạo (AI), từ cốt lõi là những thuật toán như máy học (machine learning), học sâu (deep learning),.. và áp dụng trong một số lĩnh vực thực tế như hiểu được nội dung hình ảnh, ngôn ngữ, giọng nói và hành vi tương tác người dùng. Năm 2022, VinAI được công nhận là đại diện Việt Nam duy nhất nằm trong top 20 các công ty toàn cầu dẫn đầu về nghiên cứu AI trong năm 2022. \nĐược thành lập năm 2019, chương trình VinAI Residency Program là chương trình đào tạo tài năng nghiên cứu AI đầu tiên và danh giá nhất Việt Nam. Cho đến nay, chương trình đã đào tạo hơn 100 nhân tài, đặc biệt trong đó có gần 50 nhân tài đang học Tiến sỹ tại các trường TOP 20 toàn cầu trong lĩnh vực AI. \nVới lộ trình đào tạo chuyên sâu trong vòng 2 năm, thành viên chương trình được cung cấp đầy đủ cơ sở vật chất, các khóa học và người hướng dẫn là giáo sư, tiến sĩ đầu ngành để phục vụ cho những dự án nghiên cứu lớn, cạnh tranh tại các hội nghị khoa học hàng đầu trên trường quốc tế. Không chỉ vậy, những AI Resident này còn được đào tạo toàn diện, không chỉ tập trung nghiên cứu chuyên sâu mà còn có những cơ hội học tập, rèn luyện kỹ năng mềm, khả năng ngôn ngữ, tư duy doanh nghiệp,... để trở thành những nhân tố xuất sắc và có tầm ảnh hưởng trong cộng đồng.​\nỨNG TUYỂN NGAY BATCH 11.",
  },
  {
    title: "Pop it!!!!",
    date: "12/12/2023",
    author: "Quyen Thuc Doan",
    content:
      "Công ty VinAI (thuộc tập đoàn Vingroup) chuyên nghiên cứu những vấn đề cơ bản của trí tuệ nhân tạo (AI), từ cốt lõi là những thuật toán như máy học (machine learning), học sâu (deep learning),.. và áp dụng trong một số lĩnh vực thực tế như hiểu được nội dung hình ảnh, ngôn ngữ, giọng nói và hành vi tương tác người dùng. Năm 2022, VinAI được công nhận là đại diện Việt Nam duy nhất nằm trong top 20 các công ty toàn cầu dẫn đầu về nghiên cứu AI trong năm 2022. \nĐược thành lập năm 2019, chương trình VinAI Residency Program là chương trình đào tạo tài năng nghiên cứu AI đầu tiên và danh giá nhất Việt Nam. Cho đến nay, chương trình đã đào tạo hơn 100 nhân tài, đặc biệt trong đó có gần 50 nhân tài đang học Tiến sỹ tại các trường TOP 20 toàn cầu trong lĩnh vực AI. \nVới lộ trình đào tạo chuyên sâu trong vòng 2 năm, thành viên chương trình được cung cấp đầy đủ cơ sở vật chất, các khóa học và người hướng dẫn là giáo sư, tiến sĩ đầu ngành để phục vụ cho những dự án nghiên cứu lớn, cạnh tranh tại các hội nghị khoa học hàng đầu trên trường quốc tế. Không chỉ vậy, những AI Resident này còn được đào tạo toàn diện, không chỉ tập trung nghiên cứu chuyên sâu mà còn có những cơ hội học tập, rèn luyện kỹ năng mềm, khả năng ngôn ngữ, tư duy doanh nghiệp,... để trở thành những nhân tố xuất sắc và có tầm ảnh hưởng trong cộng đồng.​\nỨNG TUYỂN NGAY BATCH 11.",
  },
  {
    title: "Pop it!!!!",
    date: "12/12/2023",
    author: "Quyen Thuc Doan",
    content:
      "Công ty VinAI (thuộc tập đoàn Vingroup) chuyên nghiên cứu những vấn đề cơ bản của trí tuệ nhân tạo (AI), từ cốt lõi là những thuật toán như máy học (machine learning), học sâu (deep learning),.. và áp dụng trong một số lĩnh vực thực tế như hiểu được nội dung hình ảnh, ngôn ngữ, giọng nói và hành vi tương tác người dùng. Năm 2022, VinAI được công nhận là đại diện Việt Nam duy nhất nằm trong top 20 các công ty toàn cầu dẫn đầu về nghiên cứu AI trong năm 2022. \nĐược thành lập năm 2019, chương trình VinAI Residency Program là chương trình đào tạo tài năng nghiên cứu AI đầu tiên và danh giá nhất Việt Nam. Cho đến nay, chương trình đã đào tạo hơn 100 nhân tài, đặc biệt trong đó có gần 50 nhân tài đang học Tiến sỹ tại các trường TOP 20 toàn cầu trong lĩnh vực AI. \nVới lộ trình đào tạo chuyên sâu trong vòng 2 năm, thành viên chương trình được cung cấp đầy đủ cơ sở vật chất, các khóa học và người hướng dẫn là giáo sư, tiến sĩ đầu ngành để phục vụ cho những dự án nghiên cứu lớn, cạnh tranh tại các hội nghị khoa học hàng đầu trên trường quốc tế. Không chỉ vậy, những AI Resident này còn được đào tạo toàn diện, không chỉ tập trung nghiên cứu chuyên sâu mà còn có những cơ hội học tập, rèn luyện kỹ năng mềm, khả năng ngôn ngữ, tư duy doanh nghiệp,... để trở thành những nhân tố xuất sắc và có tầm ảnh hưởng trong cộng đồng.​\nỨNG TUYỂN NGAY BATCH 11.",
  },
  {
    title: "Pop it!!!!",
    date: "12/12/2023",
    author: "Quyen Thuc Doan",
    content:
      "Công ty VinAI (thuộc tập đoàn Vingroup) chuyên nghiên cứu những vấn đề cơ bản của trí tuệ nhân tạo (AI), từ cốt lõi là những thuật toán như máy học (machine learning), học sâu (deep learning),.. và áp dụng trong một số lĩnh vực thực tế như hiểu được nội dung hình ảnh, ngôn ngữ, giọng nói và hành vi tương tác người dùng. Năm 2022, VinAI được công nhận là đại diện Việt Nam duy nhất nằm trong top 20 các công ty toàn cầu dẫn đầu về nghiên cứu AI trong năm 2022. \nĐược thành lập năm 2019, chương trình VinAI Residency Program là chương trình đào tạo tài năng nghiên cứu AI đầu tiên và danh giá nhất Việt Nam. Cho đến nay, chương trình đã đào tạo hơn 100 nhân tài, đặc biệt trong đó có gần 50 nhân tài đang học Tiến sỹ tại các trường TOP 20 toàn cầu trong lĩnh vực AI. \nVới lộ trình đào tạo chuyên sâu trong vòng 2 năm, thành viên chương trình được cung cấp đầy đủ cơ sở vật chất, các khóa học và người hướng dẫn là giáo sư, tiến sĩ đầu ngành để phục vụ cho những dự án nghiên cứu lớn, cạnh tranh tại các hội nghị khoa học hàng đầu trên trường quốc tế. Không chỉ vậy, những AI Resident này còn được đào tạo toàn diện, không chỉ tập trung nghiên cứu chuyên sâu mà còn có những cơ hội học tập, rèn luyện kỹ năng mềm, khả năng ngôn ngữ, tư duy doanh nghiệp,... để trở thành những nhân tố xuất sắc và có tầm ảnh hưởng trong cộng đồng.​\nỨNG TUYỂN NGAY BATCH 11.",
  },
  {
    title: "Pop it!!!!",
    date: "12/12/2023",
    author: "Quyen Thuc Doan",
    content:
      "Công ty VinAI (thuộc tập đoàn Vingroup) chuyên nghiên cứu những vấn đề cơ bản của trí tuệ nhân tạo (AI), từ cốt lõi là những thuật toán như máy học (machine learning), học sâu (deep learning),.. và áp dụng trong một số lĩnh vực thực tế như hiểu được nội dung hình ảnh, ngôn ngữ, giọng nói và hành vi tương tác người dùng. Năm 2022, VinAI được công nhận là đại diện Việt Nam duy nhất nằm trong top 20 các công ty toàn cầu dẫn đầu về nghiên cứu AI trong năm 2022. \nĐược thành lập năm 2019, chương trình VinAI Residency Program là chương trình đào tạo tài năng nghiên cứu AI đầu tiên và danh giá nhất Việt Nam. Cho đến nay, chương trình đã đào tạo hơn 100 nhân tài, đặc biệt trong đó có gần 50 nhân tài đang học Tiến sỹ tại các trường TOP 20 toàn cầu trong lĩnh vực AI. \nVới lộ trình đào tạo chuyên sâu trong vòng 2 năm, thành viên chương trình được cung cấp đầy đủ cơ sở vật chất, các khóa học và người hướng dẫn là giáo sư, tiến sĩ đầu ngành để phục vụ cho những dự án nghiên cứu lớn, cạnh tranh tại các hội nghị khoa học hàng đầu trên trường quốc tế. Không chỉ vậy, những AI Resident này còn được đào tạo toàn diện, không chỉ tập trung nghiên cứu chuyên sâu mà còn có những cơ hội học tập, rèn luyện kỹ năng mềm, khả năng ngôn ngữ, tư duy doanh nghiệp,... để trở thành những nhân tố xuất sắc và có tầm ảnh hưởng trong cộng đồng.​\nỨNG TUYỂN NGAY BATCH 11.",
  },
  {
    title: "Pop it!!!!",
    date: "12/12/2023",
    author: "Quyen Thuc Doan",
    content:
      "Công ty VinAI (thuộc tập đoàn Vingroup) chuyên nghiên cứu những vấn đề cơ bản của trí tuệ nhân tạo (AI), từ cốt lõi là những thuật toán như máy học (machine learning), học sâu (deep learning),.. và áp dụng trong một số lĩnh vực thực tế như hiểu được nội dung hình ảnh, ngôn ngữ, giọng nói và hành vi tương tác người dùng. Năm 2022, VinAI được công nhận là đại diện Việt Nam duy nhất nằm trong top 20 các công ty toàn cầu dẫn đầu về nghiên cứu AI trong năm 2022. \nĐược thành lập năm 2019, chương trình VinAI Residency Program là chương trình đào tạo tài năng nghiên cứu AI đầu tiên và danh giá nhất Việt Nam. Cho đến nay, chương trình đã đào tạo hơn 100 nhân tài, đặc biệt trong đó có gần 50 nhân tài đang học Tiến sỹ tại các trường TOP 20 toàn cầu trong lĩnh vực AI. \nVới lộ trình đào tạo chuyên sâu trong vòng 2 năm, thành viên chương trình được cung cấp đầy đủ cơ sở vật chất, các khóa học và người hướng dẫn là giáo sư, tiến sĩ đầu ngành để phục vụ cho những dự án nghiên cứu lớn, cạnh tranh tại các hội nghị khoa học hàng đầu trên trường quốc tế. Không chỉ vậy, những AI Resident này còn được đào tạo toàn diện, không chỉ tập trung nghiên cứu chuyên sâu mà còn có những cơ hội học tập, rèn luyện kỹ năng mềm, khả năng ngôn ngữ, tư duy doanh nghiệp,... để trở thành những nhân tố xuất sắc và có tầm ảnh hưởng trong cộng đồng.​\nỨNG TUYỂN NGAY BATCH 11.",
  },
];

type APost = {
  date: string;
  title: string;
  author: string;
  content: string;
};

const Content = () => {
  return (
    <>
      <div className="relative justify-center items-center flex flex-col gap-3 bg-body inset-x-1.5 top-5 mb-20 lg:w-1/2 md:w-5/6 sm:w-full">
        {contentList.map((data) => {
          return (
            <Post
              data={{
                date: data.date,
                title: data.title,
                author: data.author,
                content: data.content,
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default Content;

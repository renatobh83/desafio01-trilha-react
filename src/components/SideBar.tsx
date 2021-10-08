import { memo } from "react";
import { Button } from "../components/Button";
import "../styles/sidebar.scss";
interface sideBarProps {
  genres: {
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  }[];
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
}
function SideBarComponent({
  genres,
  selectedGenreId,
  handleClickButton,
}: sideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
export const SideBar = memo(SideBarComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.genres, nextProps.genres);
});
